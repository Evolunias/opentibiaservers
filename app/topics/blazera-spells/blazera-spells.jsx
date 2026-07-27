import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-spells');
}

export default function BlazeraSpellsKeywordPage() {
  return <StaticKeywordPage slug="blazera-spells" />;
}
