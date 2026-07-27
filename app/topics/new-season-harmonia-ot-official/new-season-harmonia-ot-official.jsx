import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-official');
}

export default function NewSeasonHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-official" />;
}
