import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-spells');
}

export default function LumineraSpellsKeywordPage() {
  return <StaticKeywordPage slug="luminera-spells" />;
}
