import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-website');
}

export default function NostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="nostalther-website" />;
}
