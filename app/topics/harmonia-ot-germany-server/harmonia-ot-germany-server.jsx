import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-germany-server');
}

export default function HarmoniaOtGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-germany-server" />;
}
