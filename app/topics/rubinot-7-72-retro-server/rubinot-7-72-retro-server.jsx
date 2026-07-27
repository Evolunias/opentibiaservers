import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-72-retro-server');
}

export default function Rubinot772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-72-retro-server" />;
}
