import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-54-retro-server');
}

export default function Rubinot854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-54-retro-server" />;
}
