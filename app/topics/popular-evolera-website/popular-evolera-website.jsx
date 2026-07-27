import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-website');
}

export default function PopularEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-website" />;
}
