import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-kasteria-tibia');
}

export default function Keyword2026KasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-kasteria-tibia" />;
}
