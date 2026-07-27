import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-private-server');
}

export default function TopHarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-private-server" />;
}
