import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-official');
}

export default function CurrentArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-official" />;
}
