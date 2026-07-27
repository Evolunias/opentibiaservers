import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-oldera-open-tibia');
}

export default function Keyword2026OlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-oldera-open-tibia" />;
}
