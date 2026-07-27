import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-retro-server');
}

export default function DuraOnline15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-retro-server" />;
}
