import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-guide');
}

export default function CustomElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-guide" />;
}
