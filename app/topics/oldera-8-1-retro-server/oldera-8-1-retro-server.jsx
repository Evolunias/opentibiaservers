import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-1-retro-server');
}

export default function Oldera81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-1-retro-server" />;
}
