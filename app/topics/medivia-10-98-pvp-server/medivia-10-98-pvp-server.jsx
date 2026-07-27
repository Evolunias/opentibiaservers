import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-98-pvp-server');
}

export default function Medivia1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-98-pvp-server" />;
}
