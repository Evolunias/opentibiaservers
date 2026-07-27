import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-ot-server');
}

export default function OfficialZuneraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-ot-server" />;
}
