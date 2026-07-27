import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-4-non-pvp-server');
}

export default function Blazera74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-4-non-pvp-server" />;
}
