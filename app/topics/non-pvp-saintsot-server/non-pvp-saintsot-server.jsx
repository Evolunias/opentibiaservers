import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-saintsot-server');
}

export default function NonPvpSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-saintsot-server" />;
}
