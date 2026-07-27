import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-6-non-pvp-server');
}

export default function Nostalther76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-6-non-pvp-server" />;
}
