import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-ot-server');
}

export default function FreshStartArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-ot-server" />;
}
