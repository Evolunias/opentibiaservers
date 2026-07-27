import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-open-tibia');
}

export default function NoResetAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-open-tibia" />;
}
