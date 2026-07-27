import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-evolunia-tibia');
}

export default function Keyword2026EvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-evolunia-tibia" />;
}
