import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-pvp-server');
}

export default function Blazera76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-pvp-server" />;
}
