import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-website');
}

export default function FreshStartTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-website" />;
}
