import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-tibia');
}

export default function NoResetKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-tibia" />;
}
