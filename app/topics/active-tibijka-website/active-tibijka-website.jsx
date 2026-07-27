import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-website');
}

export default function ActiveTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-website" />;
}
