import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-98-retro-server');
}

export default function Rubinot1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-98-retro-server" />;
}
