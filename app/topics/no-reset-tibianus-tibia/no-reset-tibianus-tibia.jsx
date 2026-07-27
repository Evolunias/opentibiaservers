import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-tibia');
}

export default function NoResetTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-tibia" />;
}
