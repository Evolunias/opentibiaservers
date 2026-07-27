import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-thaisot-server');
}

export default function RetroThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="retro-thaisot-server" />;
}
