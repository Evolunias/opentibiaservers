import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-retro-server');
}

export default function Eldera100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-retro-server" />;
}
