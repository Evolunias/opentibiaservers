import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-8-1-retro-server');
}

export default function Miracle81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-8-1-retro-server" />;
}
