import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-saintsot-server');
}

export default function PvpSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-saintsot-server" />;
}
