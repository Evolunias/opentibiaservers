import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-server');
}

export default function LowrateCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-server" />;
}
