import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-0-non-pvp-server');
}

export default function Blazera80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-0-non-pvp-server" />;
}
