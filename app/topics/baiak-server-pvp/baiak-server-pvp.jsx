import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-pvp');
}

export default function BaiakServerPvpKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-pvp" />;
}
