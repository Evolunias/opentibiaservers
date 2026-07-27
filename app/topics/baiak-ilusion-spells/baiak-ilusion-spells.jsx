import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-spells');
}

export default function BaiakIlusionSpellsKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-spells" />;
}
