import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-private-server');
}

export default function ActiveUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-unline-private-server" />;
}
