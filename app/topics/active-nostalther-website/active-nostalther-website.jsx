import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-website');
}

export default function ActiveNostaltherWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-website" />;
}
