import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-open-tibia');
}

export default function NoResetAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-open-tibia" />;
}
