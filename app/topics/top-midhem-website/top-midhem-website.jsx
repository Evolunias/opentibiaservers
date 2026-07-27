import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-website');
}

export default function TopMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-website" />;
}
