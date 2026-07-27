import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-0-retro-server');
}

export default function Rubinot80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-0-retro-server" />;
}
