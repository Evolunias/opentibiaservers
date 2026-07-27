import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-9-6-retro-server');
}

export default function Realera96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realera-9-6-retro-server" />;
}
