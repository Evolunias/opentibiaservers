import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-website');
}

export default function PopularElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-website" />;
}
