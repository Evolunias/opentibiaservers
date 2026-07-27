import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-pvp');
}

export default function TfsServerPvpKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-pvp" />;
}
