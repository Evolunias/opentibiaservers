import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-north-america-server');
}

export default function HarmoniaOtNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-north-america-server" />;
}
