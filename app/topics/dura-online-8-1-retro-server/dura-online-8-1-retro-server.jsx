import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-1-retro-server');
}

export default function DuraOnline81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-1-retro-server" />;
}
