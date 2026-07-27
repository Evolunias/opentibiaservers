import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-ot');
}

export default function NewAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-ot" />;
}
