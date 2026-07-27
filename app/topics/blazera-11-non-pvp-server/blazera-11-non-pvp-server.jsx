import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-non-pvp-server');
}

export default function Blazera11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-non-pvp-server" />;
}
