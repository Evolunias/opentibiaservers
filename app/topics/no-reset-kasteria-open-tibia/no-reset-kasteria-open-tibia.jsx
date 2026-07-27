import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-open-tibia');
}

export default function NoResetKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-open-tibia" />;
}
