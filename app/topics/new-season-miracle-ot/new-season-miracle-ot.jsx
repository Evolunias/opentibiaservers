import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-ot');
}

export default function NewSeasonMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-ot" />;
}
