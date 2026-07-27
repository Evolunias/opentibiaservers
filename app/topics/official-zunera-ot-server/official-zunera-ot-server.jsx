import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-server');
}

export default function OfficialZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-server" />;
}
