import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-private-server');
}

export default function CustomUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-private-server" />;
}
