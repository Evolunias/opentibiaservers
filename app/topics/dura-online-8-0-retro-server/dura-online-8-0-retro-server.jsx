import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-0-retro-server');
}

export default function DuraOnline80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-0-retro-server" />;
}
