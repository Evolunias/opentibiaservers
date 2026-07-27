import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-website');
}

export default function HighrateEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-website" />;
}
