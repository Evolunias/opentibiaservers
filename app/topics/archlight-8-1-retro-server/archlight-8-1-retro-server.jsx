import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-retro-server');
}

export default function Archlight81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-retro-server" />;
}
