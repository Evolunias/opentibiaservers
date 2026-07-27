import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-website');
}

export default function NewNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-website" />;
}
