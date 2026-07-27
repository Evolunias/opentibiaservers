import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-website');
}

export default function FreshStartUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-website" />;
}
