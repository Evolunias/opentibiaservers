import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-98-retro-server');
}

export default function Eldera1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-98-retro-server" />;
}
