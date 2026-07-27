import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-kasteria-open-tibia');
}

export default function Keyword2026KasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-kasteria-open-tibia" />;
}
