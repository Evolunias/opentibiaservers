import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-retro-server');
}

export default function Eldera14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-retro-server" />;
}
