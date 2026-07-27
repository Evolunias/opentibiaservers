import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-wiki-france');
}

export default function SeasonalWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-wiki-france" />;
}
