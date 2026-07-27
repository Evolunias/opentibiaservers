import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-website');
}

export default function PopularNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-website" />;
}
