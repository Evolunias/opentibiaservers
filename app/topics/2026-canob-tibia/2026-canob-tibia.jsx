import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-canob-tibia');
}

export default function Keyword2026CanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-canob-tibia" />;
}
