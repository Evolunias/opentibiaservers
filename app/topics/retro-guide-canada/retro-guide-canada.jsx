import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-canada');
}

export default function RetroGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-canada" />;
}
