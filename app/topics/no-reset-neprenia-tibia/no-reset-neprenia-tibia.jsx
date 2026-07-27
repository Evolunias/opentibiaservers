import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-tibia');
}

export default function NoResetNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-tibia" />;
}
