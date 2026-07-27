import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-uk');
}

export default function TibiantisPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-uk" />;
}
