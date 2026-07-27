import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-website');
}

export default function CustomNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-website" />;
}
