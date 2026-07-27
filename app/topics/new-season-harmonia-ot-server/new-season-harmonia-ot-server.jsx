import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-server');
}

export default function NewSeasonHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-server" />;
}
