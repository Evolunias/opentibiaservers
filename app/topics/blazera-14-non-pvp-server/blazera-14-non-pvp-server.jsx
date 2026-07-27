import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-non-pvp-server');
}

export default function Blazera14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-non-pvp-server" />;
}
