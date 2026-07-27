import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-website');
}

export default function PopularUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-website" />;
}
