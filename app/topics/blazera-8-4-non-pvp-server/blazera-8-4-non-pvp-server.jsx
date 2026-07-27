import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-non-pvp-server');
}

export default function Blazera84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-non-pvp-server" />;
}
