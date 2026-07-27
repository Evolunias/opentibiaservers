import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-official');
}

export default function FreshStartArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-official" />;
}
