import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-non-pvp-server');
}

export default function Blazera96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-non-pvp-server" />;
}
