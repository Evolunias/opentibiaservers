import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-private-server');
}

export default function OfficialZuneraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-private-server" />;
}
