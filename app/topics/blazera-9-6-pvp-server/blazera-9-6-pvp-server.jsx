import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-pvp-server');
}

export default function Blazera96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-pvp-server" />;
}
