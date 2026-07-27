import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-retro-server');
}

export default function Archlight15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-retro-server" />;
}
