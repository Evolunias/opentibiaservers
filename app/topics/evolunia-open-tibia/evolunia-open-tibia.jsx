import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-open-tibia');
}

export default function EvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-open-tibia" />;
}
