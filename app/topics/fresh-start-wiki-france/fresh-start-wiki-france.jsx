import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-france');
}

export default function FreshStartWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-france" />;
}
