import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-private-server');
}

export default function LowrateAureraGlobalPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-private-server" />;
}
