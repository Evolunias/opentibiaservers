import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-website');
}

export default function FreshStartMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-website" />;
}
