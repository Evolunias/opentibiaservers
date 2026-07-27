import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-realesta-open-tibia');
}

export default function Keyword2026RealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-realesta-open-tibia" />;
}
