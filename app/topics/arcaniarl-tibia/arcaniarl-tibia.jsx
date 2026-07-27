import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-tibia');
}

export default function ArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-tibia" />;
}
