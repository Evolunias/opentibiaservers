import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-non-pvp');
}

export default function TfsServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-non-pvp" />;
}
