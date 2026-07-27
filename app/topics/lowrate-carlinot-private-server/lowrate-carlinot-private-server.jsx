import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-private-server');
}

export default function LowrateCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-private-server" />;
}
