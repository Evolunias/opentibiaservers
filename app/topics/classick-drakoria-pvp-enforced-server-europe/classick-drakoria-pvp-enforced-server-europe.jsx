import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-enforced-server-europe');
}

export default function ClassickDrakoriaPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-enforced-server-europe" />;
}
