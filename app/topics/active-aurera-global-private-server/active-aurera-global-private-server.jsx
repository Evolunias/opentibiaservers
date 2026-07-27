import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-private-server');
}

export default function ActiveAureraGlobalPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-private-server" />;
}
