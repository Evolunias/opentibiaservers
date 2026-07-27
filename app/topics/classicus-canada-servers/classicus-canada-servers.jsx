import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-canada-servers');
}

export default function ClassicusCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-canada-servers" />;
}
