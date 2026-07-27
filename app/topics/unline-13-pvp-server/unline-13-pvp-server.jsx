import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-pvp-server');
}

export default function Unline13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-13-pvp-server" />;
}
