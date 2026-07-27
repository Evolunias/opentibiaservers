import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibijka-tibia');
}

export default function Keyword2026TibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-tibijka-tibia" />;
}
