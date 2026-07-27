import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-tibia');
}

export default function NoResetImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-tibia" />;
}
