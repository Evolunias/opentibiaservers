import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-retro-server');
}

export default function Rubinot81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-retro-server" />;
}
