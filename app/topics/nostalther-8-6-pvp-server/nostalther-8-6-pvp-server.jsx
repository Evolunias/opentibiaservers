import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-6-pvp-server');
}

export default function Nostalther86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-6-pvp-server" />;
}
