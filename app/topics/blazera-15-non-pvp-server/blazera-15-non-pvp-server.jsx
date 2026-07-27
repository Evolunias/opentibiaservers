import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-non-pvp-server');
}

export default function Blazera15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-non-pvp-server" />;
}
