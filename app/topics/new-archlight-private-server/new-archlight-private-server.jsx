import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-private-server');
}

export default function NewArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-private-server" />;
}
