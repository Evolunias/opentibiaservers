import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-retro-server');
}

export default function DuraOnline11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-retro-server" />;
}
