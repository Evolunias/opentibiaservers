import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-similar-servers');
}

export default function AureraGlobalSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-similar-servers" />;
}
