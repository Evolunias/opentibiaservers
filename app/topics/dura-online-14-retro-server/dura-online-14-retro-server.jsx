import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-retro-server');
}

export default function DuraOnline14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-retro-server" />;
}
