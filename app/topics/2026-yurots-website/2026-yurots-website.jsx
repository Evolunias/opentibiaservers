import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-yurots-website');
}

export default function Keyword2026YurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="2026-yurots-website" />;
}
