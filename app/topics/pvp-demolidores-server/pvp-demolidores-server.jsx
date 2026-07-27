import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-demolidores-server');
}

export default function PvpDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-demolidores-server" />;
}
