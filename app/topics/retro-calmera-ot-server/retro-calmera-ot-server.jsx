import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-calmera-ot-server');
}

export default function RetroCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="retro-calmera-ot-server" />;
}
