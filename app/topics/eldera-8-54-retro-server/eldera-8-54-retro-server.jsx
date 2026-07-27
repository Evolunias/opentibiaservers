import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-retro-server');
}

export default function Eldera854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-retro-server" />;
}
