import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-retro-server');
}

export default function Archlight13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-retro-server" />;
}
