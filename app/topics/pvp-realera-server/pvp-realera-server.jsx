import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-realera-server');
}

export default function PvpRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-realera-server" />;
}
