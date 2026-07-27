import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-retro-server');
}

export default function Rubinot13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-retro-server" />;
}
