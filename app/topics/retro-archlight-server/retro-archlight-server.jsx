import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-archlight-server');
}

export default function RetroArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="retro-archlight-server" />;
}
