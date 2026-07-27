import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-private-server');
}

export default function TopAureraGlobalPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-private-server" />;
}
