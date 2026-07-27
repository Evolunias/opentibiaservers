import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-canada');
}

export default function TibiantisPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-canada" />;
}
