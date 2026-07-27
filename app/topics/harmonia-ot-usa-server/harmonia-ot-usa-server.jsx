import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-usa-server');
}

export default function HarmoniaOtUsaServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-usa-server" />;
}
