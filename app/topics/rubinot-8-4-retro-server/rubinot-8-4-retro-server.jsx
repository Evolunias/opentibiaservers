import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-4-retro-server');
}

export default function Rubinot84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-4-retro-server" />;
}
