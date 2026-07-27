import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-private-server');
}

export default function ActiveHarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-private-server" />;
}
