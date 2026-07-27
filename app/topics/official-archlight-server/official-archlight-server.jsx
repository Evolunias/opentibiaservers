import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-server');
}

export default function OfficialArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-server" />;
}
