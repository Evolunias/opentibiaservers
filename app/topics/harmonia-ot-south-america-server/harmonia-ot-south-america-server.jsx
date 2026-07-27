import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-south-america-server');
}

export default function HarmoniaOtSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-south-america-server" />;
}
