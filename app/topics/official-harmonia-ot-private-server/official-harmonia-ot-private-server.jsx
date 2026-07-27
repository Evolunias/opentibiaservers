import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-private-server');
}

export default function OfficialHarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-private-server" />;
}
