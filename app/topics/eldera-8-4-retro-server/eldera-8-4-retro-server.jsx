import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-4-retro-server');
}

export default function Eldera84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-4-retro-server" />;
}
