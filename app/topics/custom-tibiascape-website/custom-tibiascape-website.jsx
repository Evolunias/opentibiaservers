import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-website');
}

export default function CustomTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-website" />;
}
