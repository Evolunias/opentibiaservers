import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-private-server');
}

export default function CurrentAureraGlobalPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-private-server" />;
}
