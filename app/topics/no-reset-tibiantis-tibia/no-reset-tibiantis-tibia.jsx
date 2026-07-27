import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-tibia');
}

export default function NoResetTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-tibia" />;
}
