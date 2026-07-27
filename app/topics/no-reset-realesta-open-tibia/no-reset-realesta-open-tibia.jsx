import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-open-tibia');
}

export default function NoResetRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-open-tibia" />;
}
