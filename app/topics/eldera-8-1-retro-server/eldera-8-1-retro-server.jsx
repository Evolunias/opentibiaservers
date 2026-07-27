import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-1-retro-server');
}

export default function Eldera81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-1-retro-server" />;
}
