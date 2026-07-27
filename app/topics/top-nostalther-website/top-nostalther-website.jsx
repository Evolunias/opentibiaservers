import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-website');
}

export default function TopNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-website" />;
}
