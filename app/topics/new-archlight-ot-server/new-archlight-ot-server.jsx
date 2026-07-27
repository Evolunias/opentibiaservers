import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-ot-server');
}

export default function NewArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-ot-server" />;
}
