import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-0-retro-server');
}

export default function Eldera80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-0-retro-server" />;
}
