import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-website');
}

export default function LowrateTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-website" />;
}
