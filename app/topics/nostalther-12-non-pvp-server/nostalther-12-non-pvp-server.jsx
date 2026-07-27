import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-non-pvp-server');
}

export default function Nostalther12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-non-pvp-server" />;
}
