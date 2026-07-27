import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-private-server');
}

export default function UnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="unline-private-server" />;
}
