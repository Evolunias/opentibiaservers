import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-private-server');
}

export default function AureraGlobalPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-private-server" />;
}
