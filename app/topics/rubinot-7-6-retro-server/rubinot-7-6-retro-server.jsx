import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-retro-server');
}

export default function Rubinot76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-retro-server" />;
}
