import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-14-retro-server');
}

export default function Archlight14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-14-retro-server" />;
}
