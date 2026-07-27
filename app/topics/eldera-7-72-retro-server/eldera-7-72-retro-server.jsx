import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-72-retro-server');
}

export default function Eldera772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-72-retro-server" />;
}
