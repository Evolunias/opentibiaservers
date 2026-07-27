import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-open-tibia');
}

export default function NoResetSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-open-tibia" />;
}
