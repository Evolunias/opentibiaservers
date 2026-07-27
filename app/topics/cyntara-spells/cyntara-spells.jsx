import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-spells');
}

export default function CyntaraSpellsKeywordPage() {
  return <StaticKeywordPage slug="cyntara-spells" />;
}
