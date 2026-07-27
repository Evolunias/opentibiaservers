import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibiara-website');
}

export default function Keyword2026TibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="2026-tibiara-website" />;
}
