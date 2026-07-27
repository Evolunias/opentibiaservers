import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-ot');
}

export default function TopArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-ot" />;
}
