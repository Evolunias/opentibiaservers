import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-4-retro-server');
}

export default function Oldera74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-4-retro-server" />;
}
