import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-ot-server');
}

export default function NewSeasonHarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-ot-server" />;
}
