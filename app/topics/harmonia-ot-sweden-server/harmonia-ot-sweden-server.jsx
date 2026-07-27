import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-sweden-server');
}

export default function HarmoniaOtSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-sweden-server" />;
}
