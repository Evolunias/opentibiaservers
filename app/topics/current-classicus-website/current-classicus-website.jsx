import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-website');
}

export default function CurrentClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-website" />;
}
