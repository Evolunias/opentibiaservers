import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-98-non-pvp-server');
}

export default function Blazera1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-98-non-pvp-server" />;
}
