import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-website');
}

export default function LowrateNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-website" />;
}
