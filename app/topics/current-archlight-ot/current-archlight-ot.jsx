import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-ot');
}

export default function CurrentArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-ot" />;
}
