import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-france-server');
}

export default function HarmoniaOtFranceServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-france-server" />;
}
