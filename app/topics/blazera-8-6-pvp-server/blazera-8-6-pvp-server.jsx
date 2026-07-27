import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-6-pvp-server');
}

export default function Blazera86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-6-pvp-server" />;
}
