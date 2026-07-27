import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-open-tibia');
}

export default function ActiveEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-open-tibia" />;
}
