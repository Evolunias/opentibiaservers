import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-website');
}

export default function TibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-website" />;
}
