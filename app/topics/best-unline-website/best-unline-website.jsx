import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-website');
}

export default function BestUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-unline-website" />;
}
