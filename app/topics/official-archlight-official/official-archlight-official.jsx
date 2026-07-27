import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-official');
}

export default function OfficialArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-official" />;
}
