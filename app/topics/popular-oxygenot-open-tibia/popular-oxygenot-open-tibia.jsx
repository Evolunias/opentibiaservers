import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-open-tibia');
}

export default function PopularOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-open-tibia" />;
}
