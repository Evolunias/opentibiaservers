import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-open-tibia');
}

export default function NoResetImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-open-tibia" />;
}
