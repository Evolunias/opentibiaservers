import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-private-server');
}

export default function CustomHarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-private-server" />;
}
