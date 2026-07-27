import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-argentina');
}

export default function RetroGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-argentina" />;
}
