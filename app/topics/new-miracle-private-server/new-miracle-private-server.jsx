import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-private-server');
}

export default function NewMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-private-server" />;
}
