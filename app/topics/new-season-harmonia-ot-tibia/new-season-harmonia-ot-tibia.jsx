import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-tibia');
}

export default function NewSeasonHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-tibia" />;
}
