import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-server');
}

export default function LowrateYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-server" />;
}
