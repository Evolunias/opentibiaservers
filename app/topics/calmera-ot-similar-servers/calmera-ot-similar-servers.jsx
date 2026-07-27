import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-similar-servers');
}

export default function CalmeraOtSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-similar-servers" />;
}
