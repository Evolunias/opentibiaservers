import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-13-retro-server');
}

export default function DuraOnline13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-13-retro-server" />;
}
