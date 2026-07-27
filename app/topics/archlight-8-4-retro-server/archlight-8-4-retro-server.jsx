import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-4-retro-server');
}

export default function Archlight84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-4-retro-server" />;
}
