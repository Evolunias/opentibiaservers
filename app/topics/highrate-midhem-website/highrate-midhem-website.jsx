import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-website');
}

export default function HighrateMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-website" />;
}
