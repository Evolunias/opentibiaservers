import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-enforced-server-europe');
}

export default function ClassicusPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-enforced-server-europe" />;
}
