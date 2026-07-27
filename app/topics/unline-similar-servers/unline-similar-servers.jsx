import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-similar-servers');
}

export default function UnlineSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="unline-similar-servers" />;
}
