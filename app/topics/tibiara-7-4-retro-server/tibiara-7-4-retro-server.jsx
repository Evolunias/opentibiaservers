import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-4-retro-server');
}

export default function Tibiara74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-4-retro-server" />;
}
