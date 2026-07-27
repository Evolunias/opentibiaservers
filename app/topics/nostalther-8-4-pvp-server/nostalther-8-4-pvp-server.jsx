import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-4-pvp-server');
}

export default function Nostalther84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-4-pvp-server" />;
}
