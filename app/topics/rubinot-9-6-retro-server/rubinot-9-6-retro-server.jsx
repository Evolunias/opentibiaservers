import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-retro-server');
}

export default function Rubinot96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-retro-server" />;
}
