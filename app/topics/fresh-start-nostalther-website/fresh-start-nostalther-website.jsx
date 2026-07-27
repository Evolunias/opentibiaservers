import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-website');
}

export default function FreshStartNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-website" />;
}
