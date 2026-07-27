import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-ot');
}

export default function NewSeasonTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-ot" />;
}
