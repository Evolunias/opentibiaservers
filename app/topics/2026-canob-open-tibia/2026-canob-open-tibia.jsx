import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-canob-open-tibia');
}

export default function Keyword2026CanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-canob-open-tibia" />;
}
