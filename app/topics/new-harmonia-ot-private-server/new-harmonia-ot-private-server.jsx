import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-private-server');
}

export default function NewHarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-private-server" />;
}
