import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-open-tibia');
}

export default function CurrentEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-open-tibia" />;
}
