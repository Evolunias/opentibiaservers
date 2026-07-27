import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-open-tibia');
}

export default function LowrateEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-open-tibia" />;
}
