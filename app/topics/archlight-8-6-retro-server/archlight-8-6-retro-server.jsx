import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-6-retro-server');
}

export default function Archlight86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-6-retro-server" />;
}
