import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-france');
}

export default function EvoWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-france" />;
}
