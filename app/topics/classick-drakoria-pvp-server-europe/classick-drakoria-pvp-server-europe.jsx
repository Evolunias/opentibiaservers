import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-server-europe');
}

export default function ClassickDrakoriaPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-server-europe" />;
}
