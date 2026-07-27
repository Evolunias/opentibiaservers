import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-europe');
}

export default function TibiantisPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-europe" />;
}
