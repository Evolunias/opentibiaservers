import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-retro-server');
}

export default function Eldera96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-retro-server" />;
}
