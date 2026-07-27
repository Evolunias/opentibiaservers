import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-4-retro-server');
}

export default function Rubinot74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-4-retro-server" />;
}
