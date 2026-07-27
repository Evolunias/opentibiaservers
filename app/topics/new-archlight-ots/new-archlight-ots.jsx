import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-ots');
}

export default function NewArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-ots" />;
}
