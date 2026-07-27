import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-website');
}

export default function NewTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-website" />;
}
