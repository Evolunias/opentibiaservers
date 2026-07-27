import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-realera-website');
}

export default function Keyword2026RealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="2026-realera-website" />;
}
