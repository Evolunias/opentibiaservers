import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-open-tibia');
}

export default function ArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-open-tibia" />;
}
