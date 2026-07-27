import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-72-retro-server');
}

export default function Archlight772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-72-retro-server" />;
}
