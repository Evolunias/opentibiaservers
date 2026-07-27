import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-mexico');
}

export default function RetroGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-mexico" />;
}
