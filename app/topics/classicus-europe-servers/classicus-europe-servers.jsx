import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-europe-servers');
}

export default function ClassicusEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-europe-servers" />;
}
