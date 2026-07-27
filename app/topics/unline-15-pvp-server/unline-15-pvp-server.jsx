import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-pvp-server');
}

export default function Unline15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-pvp-server" />;
}
