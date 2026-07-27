import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-website');
}

export default function TibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="tibijka-website" />;
}
