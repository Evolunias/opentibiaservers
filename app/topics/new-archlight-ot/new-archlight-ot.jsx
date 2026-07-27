import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-ot');
}

export default function NewArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-ot" />;
}
