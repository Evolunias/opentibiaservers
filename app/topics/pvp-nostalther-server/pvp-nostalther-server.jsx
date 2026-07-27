import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-nostalther-server');
}

export default function PvpNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-nostalther-server" />;
}
