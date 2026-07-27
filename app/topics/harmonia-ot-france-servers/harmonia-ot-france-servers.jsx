import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-france-servers');
}

export default function HarmoniaOtFranceServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-france-servers" />;
}
