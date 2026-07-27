import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-retro-server');
}

export default function Oldera11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-retro-server" />;
}
