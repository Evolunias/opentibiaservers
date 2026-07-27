import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-xanteria-open-tibia');
}

export default function Keyword2026XanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-xanteria-open-tibia" />;
}
