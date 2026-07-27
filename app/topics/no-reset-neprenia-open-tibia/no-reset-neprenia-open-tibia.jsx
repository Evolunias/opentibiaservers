import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-open-tibia');
}

export default function NoResetNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-open-tibia" />;
}
