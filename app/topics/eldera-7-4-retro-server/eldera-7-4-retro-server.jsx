import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-retro-server');
}

export default function Eldera74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-retro-server" />;
}
