import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-9-6-pvp-server');
}

export default function Nostalther96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-9-6-pvp-server" />;
}
