import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-canada-server');
}

export default function ClassicusCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-canada-server" />;
}
