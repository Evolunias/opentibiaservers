import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-website');
}

export default function BestNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-website" />;
}
