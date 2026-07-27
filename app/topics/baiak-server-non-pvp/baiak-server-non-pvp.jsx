import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-non-pvp');
}

export default function BaiakServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-non-pvp" />;
}
