import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-98-retro-server');
}

export default function Realera1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-98-retro-server" />;
}
