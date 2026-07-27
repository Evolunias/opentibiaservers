import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-private-server');
}

export default function LowrateUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-private-server" />;
}
