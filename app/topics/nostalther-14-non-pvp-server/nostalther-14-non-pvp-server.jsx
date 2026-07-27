import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-non-pvp-server');
}

export default function Nostalther14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-non-pvp-server" />;
}
