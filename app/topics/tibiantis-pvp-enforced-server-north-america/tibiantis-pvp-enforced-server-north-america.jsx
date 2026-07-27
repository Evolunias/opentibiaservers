import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-north-america');
}

export default function TibiantisPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-north-america" />;
}
