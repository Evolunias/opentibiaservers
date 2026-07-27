import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-canob-official');
}

export default function Keyword2026CanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="2026-canob-official" />;
}
