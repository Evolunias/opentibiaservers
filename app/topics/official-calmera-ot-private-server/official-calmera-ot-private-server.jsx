import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-private-server');
}

export default function OfficialCalmeraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-private-server" />;
}
