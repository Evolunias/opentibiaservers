import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-guide');
}

export default function BlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="blazera-guide" />;
}
