import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-0-retro-server');
}

export default function Archlight80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-0-retro-server" />;
}
