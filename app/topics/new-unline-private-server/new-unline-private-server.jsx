import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-private-server');
}

export default function NewUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-unline-private-server" />;
}
