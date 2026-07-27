import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-canada-server');
}

export default function HarmoniaOtCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-canada-server" />;
}
