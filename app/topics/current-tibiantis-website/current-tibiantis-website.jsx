import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-website');
}

export default function CurrentTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-website" />;
}
