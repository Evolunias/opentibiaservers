import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-wars');
}

export default function CalmeraOtWarsKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-wars" />;
}
