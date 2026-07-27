import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-spells');
}

export default function SabrehavenSpellsKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-spells" />;
}
