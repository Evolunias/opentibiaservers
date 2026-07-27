import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-6-retro-server');
}

export default function DuraOnline86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-6-retro-server" />;
}
