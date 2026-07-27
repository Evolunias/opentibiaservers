import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-1-pvp-server');
}

export default function Blazera81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-1-pvp-server" />;
}
