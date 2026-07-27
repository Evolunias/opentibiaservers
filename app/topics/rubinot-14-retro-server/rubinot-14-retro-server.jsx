import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-retro-server');
}

export default function Rubinot14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-retro-server" />;
}
