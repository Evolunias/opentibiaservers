import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-website');
}

export default function BestMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-website" />;
}
