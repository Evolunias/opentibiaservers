import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-otmadness-server');
}

export default function RetroOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="retro-otmadness-server" />;
}
