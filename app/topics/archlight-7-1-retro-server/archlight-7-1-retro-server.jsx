import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-1-retro-server');
}

export default function Archlight71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-1-retro-server" />;
}
