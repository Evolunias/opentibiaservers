import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-98-non-pvp-server');
}

export default function Medivia1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-98-non-pvp-server" />;
}
