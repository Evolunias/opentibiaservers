import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-tibia');
}

export default function NoResetSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-tibia" />;
}
