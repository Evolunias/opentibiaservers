import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-zunera-ot-server');
}

export default function NonPvpZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-zunera-ot-server" />;
}
