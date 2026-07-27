import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-open-tibia');
}

export default function NoResetRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-open-tibia" />;
}
