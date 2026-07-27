import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-retro-server');
}

export default function Tibiara100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-retro-server" />;
}
