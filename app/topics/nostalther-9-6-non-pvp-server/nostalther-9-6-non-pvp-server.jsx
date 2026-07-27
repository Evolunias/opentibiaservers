import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-9-6-non-pvp-server');
}

export default function Nostalther96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-9-6-non-pvp-server" />;
}
