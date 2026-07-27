import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-website');
}

export default function LowrateTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-website" />;
}
