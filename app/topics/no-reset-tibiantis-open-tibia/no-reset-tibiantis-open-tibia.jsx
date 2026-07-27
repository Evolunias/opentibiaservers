import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-open-tibia');
}

export default function NoResetTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-open-tibia" />;
}
