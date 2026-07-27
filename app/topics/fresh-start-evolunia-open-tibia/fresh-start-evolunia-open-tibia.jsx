import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-open-tibia');
}

export default function FreshStartEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-open-tibia" />;
}
