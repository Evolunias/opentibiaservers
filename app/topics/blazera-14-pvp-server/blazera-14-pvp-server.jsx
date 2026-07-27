import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-pvp-server');
}

export default function Blazera14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-pvp-server" />;
}
