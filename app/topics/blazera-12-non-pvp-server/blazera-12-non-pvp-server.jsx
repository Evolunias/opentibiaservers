import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-non-pvp-server');
}

export default function Blazera12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-non-pvp-server" />;
}
