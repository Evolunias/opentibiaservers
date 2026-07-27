import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-retro-server');
}

export default function Tibiara15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-retro-server" />;
}
