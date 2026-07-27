import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-ot-server');
}

export default function HarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-ot-server" />;
}
