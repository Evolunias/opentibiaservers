import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-spells');
}

export default function DemolidoresSpellsKeywordPage() {
  return <StaticKeywordPage slug="demolidores-spells" />;
}
