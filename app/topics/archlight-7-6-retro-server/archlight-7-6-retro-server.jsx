import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-6-retro-server');
}

export default function Archlight76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-6-retro-server" />;
}
