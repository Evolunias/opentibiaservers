import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-tibia');
}

export default function NoResetEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-tibia" />;
}
