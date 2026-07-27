import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-website');
}

export default function PopularMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-website" />;
}
