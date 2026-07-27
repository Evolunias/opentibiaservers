import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-blazera-server');
}

export default function PvpBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-blazera-server" />;
}
