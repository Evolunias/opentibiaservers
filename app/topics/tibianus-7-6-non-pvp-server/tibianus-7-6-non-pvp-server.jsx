import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-6-non-pvp-server');
}

export default function Tibianus76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-6-non-pvp-server" />;
}
