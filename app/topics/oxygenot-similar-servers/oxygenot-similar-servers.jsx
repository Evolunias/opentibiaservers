import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-similar-servers');
}

export default function OxygenotSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-similar-servers" />;
}
