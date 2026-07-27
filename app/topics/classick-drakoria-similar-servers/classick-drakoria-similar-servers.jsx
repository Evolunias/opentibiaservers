import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-similar-servers');
}

export default function ClassickDrakoriaSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-similar-servers" />;
}
