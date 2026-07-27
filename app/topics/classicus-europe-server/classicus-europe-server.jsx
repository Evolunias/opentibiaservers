import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-europe-server');
}

export default function ClassicusEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-europe-server" />;
}
