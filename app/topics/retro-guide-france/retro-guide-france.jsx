import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-france');
}

export default function RetroGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-france" />;
}
