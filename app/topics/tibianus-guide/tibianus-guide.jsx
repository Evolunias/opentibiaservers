import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-guide');
}

export default function TibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="tibianus-guide" />;
}
