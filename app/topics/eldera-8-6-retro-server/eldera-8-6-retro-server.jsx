import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-6-retro-server');
}

export default function Eldera86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-6-retro-server" />;
}
