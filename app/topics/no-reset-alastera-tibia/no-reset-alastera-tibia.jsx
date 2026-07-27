import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-tibia');
}

export default function NoResetAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-tibia" />;
}
