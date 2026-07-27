import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibiara-server');
}

export default function RetroTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="retro-tibiara-server" />;
}
