import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-retro-server');
}

export default function Oldera12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-retro-server" />;
}
