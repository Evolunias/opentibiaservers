import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-tibia');
}

export default function PopularOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-tibia" />;
}
