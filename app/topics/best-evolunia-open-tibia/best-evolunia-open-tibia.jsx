import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-open-tibia');
}

export default function BestEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-open-tibia" />;
}
