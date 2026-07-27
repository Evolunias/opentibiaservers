import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-non-pvp-server');
}

export default function Blazera13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-non-pvp-server" />;
}
