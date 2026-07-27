import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-ot');
}

export default function NewSeasonHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-ot" />;
}
