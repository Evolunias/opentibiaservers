import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-6-retro-server');
}

export default function Rubinot86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-6-retro-server" />;
}
