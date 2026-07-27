import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-enforced-server-latin-america');
}

export default function TibianusPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-enforced-server-latin-america" />;
}
