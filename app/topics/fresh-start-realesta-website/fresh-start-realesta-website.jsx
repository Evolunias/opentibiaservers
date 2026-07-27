import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-website');
}

export default function FreshStartRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-website" />;
}
