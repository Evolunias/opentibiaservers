import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-server');
}

export default function HarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-server" />;
}
