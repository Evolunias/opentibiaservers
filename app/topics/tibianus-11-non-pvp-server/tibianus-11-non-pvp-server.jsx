import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-non-pvp-server');
}

export default function Tibianus11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-non-pvp-server" />;
}
