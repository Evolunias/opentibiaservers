import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-tibia');
}

export default function NoResetZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-tibia" />;
}
