import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-eternal-odyssey-server');
}

export default function RetroEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="retro-eternal-odyssey-server" />;
}
