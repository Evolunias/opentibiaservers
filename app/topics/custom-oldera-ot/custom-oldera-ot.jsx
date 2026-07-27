import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-ot');
}

export default function CustomOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-ot" />;
}
