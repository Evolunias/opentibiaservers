import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-spells');
}

export default function TibiaoriginsSpellsKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-spells" />;
}
