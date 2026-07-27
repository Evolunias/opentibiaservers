import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-retro-server');
}

export default function Rubinot100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-retro-server" />;
}
