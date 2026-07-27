import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-website');
}

export default function FreshStartClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-website" />;
}
