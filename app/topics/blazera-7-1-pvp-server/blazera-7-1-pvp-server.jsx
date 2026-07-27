import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-pvp-server');
}

export default function Blazera71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-pvp-server" />;
}
