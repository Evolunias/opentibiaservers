import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-private-server');
}

export default function NewEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-private-server" />;
}
