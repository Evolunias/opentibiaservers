import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-retro-server');
}

export default function Archlight96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-retro-server" />;
}
