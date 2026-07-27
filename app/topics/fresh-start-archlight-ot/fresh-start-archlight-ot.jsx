import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-ot');
}

export default function FreshStartArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-ot" />;
}
