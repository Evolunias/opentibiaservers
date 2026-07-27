import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot');
}

export default function NewSeasonHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot" />;
}
