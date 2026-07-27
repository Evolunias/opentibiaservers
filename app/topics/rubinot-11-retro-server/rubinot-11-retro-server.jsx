import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-retro-server');
}

export default function Rubinot11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-retro-server" />;
}
