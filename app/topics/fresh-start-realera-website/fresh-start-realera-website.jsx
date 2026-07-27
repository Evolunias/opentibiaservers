import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-website');
}

export default function FreshStartRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-website" />;
}
