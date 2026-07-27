import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-retro-server');
}

export default function Rubinot15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-retro-server" />;
}
