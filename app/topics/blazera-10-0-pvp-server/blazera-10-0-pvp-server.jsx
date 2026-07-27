import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-pvp-server');
}

export default function Blazera100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-pvp-server" />;
}
