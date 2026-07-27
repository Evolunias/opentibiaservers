import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-similar-servers');
}

export default function ClassicusSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-similar-servers" />;
}
