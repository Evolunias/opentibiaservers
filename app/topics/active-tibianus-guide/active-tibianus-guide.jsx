import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-guide');
}

export default function ActiveTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-guide" />;
}
