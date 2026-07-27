import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-2026');
}

export default function Otland2026KeywordPage() {
  return <StaticKeywordPage slug="otland-2026" />;
}
