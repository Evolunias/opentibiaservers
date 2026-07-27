import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-argentina-server');
}

export default function HarmoniaOtArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-argentina-server" />;
}
