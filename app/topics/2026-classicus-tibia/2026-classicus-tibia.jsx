import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-classicus-tibia');
}

export default function Keyword2026ClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-classicus-tibia" />;
}
