import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-enforced-server-north-america');
}

export default function TibianusPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-enforced-server-north-america" />;
}
