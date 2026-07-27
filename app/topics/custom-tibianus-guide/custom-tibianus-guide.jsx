import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-guide');
}

export default function CustomTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-guide" />;
}
