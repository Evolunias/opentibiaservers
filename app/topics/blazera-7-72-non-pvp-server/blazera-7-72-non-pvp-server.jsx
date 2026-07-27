import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-72-non-pvp-server');
}

export default function Blazera772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-72-non-pvp-server" />;
}
