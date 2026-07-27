import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-pvp-server');
}

export default function Blazera15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-pvp-server" />;
}
