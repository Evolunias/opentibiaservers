import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-10-0-retro-server');
}

export default function DuraOnline100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-10-0-retro-server" />;
}
