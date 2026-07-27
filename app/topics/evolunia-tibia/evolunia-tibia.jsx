import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-tibia');
}

export default function EvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-tibia" />;
}
