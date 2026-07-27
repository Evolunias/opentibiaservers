import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-retro-server');
}

export default function Eldera76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-retro-server" />;
}
