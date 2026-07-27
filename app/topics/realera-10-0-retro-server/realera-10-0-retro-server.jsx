import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-retro-server');
}

export default function Realera100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-retro-server" />;
}
