import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-nilot-server');
}

export default function RetroNilotServerKeywordPage() {
  return <StaticKeywordPage slug="retro-nilot-server" />;
}
