import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-ots');
}

export default function NewSeasonHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-ots" />;
}
