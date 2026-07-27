import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-website');
}

export default function FreshStartOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-website" />;
}
