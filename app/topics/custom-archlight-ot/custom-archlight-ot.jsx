import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-ot');
}

export default function CustomArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-ot" />;
}
