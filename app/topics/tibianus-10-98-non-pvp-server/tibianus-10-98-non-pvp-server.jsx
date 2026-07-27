import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-98-non-pvp-server');
}

export default function Tibianus1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-98-non-pvp-server" />;
}
