import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-thornia');
}

export default function Keyword2026ThorniaKeywordPage() {
  return <StaticKeywordPage slug="2026-thornia" />;
}
