import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-retro-server');
}

export default function Rubinot12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-retro-server" />;
}
