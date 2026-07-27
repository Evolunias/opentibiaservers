import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-realesta-server');
}

export default function PvpRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-realesta-server" />;
}
