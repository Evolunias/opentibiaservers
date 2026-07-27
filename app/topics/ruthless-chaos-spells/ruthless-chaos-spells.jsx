import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-spells');
}

export default function RuthlessChaosSpellsKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-spells" />;
}
