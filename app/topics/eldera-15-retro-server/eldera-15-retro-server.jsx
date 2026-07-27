import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-retro-server');
}

export default function Eldera15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-retro-server" />;
}
