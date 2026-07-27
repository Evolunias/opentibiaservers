import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-website');
}

export default function CurrentNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-website" />;
}
