import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-website');
}

export default function LowrateMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-website" />;
}
