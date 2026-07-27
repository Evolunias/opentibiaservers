import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-cyntara-website');
}

export default function Keyword2026CyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="2026-cyntara-website" />;
}
