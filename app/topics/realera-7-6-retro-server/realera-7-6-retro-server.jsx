import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-retro-server');
}

export default function Realera76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-retro-server" />;
}
