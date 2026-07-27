import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-eldera-website');
}

export default function Keyword2026ElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="2026-eldera-website" />;
}
