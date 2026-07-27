import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-pvp-server');
}

export default function Blazera13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-pvp-server" />;
}
