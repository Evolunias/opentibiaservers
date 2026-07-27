import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-open-tibia');
}

export default function PopularEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-open-tibia" />;
}
