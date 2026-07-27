import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-open-tibia');
}

export default function TopEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-open-tibia" />;
}
