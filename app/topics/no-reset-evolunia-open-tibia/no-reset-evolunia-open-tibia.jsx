import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-open-tibia');
}

export default function NoResetEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-open-tibia" />;
}
