import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-similar-servers');
}

export default function ElderaSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-similar-servers" />;
}
