import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-website');
}

export default function CustomTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-website" />;
}
