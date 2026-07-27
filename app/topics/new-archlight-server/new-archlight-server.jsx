import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-server');
}

export default function NewArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-server" />;
}
