import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-0-retro-server');
}

export default function Archlight100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-0-retro-server" />;
}
