import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-retro-server');
}

export default function Eldera11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-retro-server" />;
}
