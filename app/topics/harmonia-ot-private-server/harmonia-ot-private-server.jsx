import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-private-server');
}

export default function HarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-private-server" />;
}
