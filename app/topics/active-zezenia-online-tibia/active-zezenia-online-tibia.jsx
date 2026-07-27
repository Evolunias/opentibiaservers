import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-tibia');
}

export default function ActiveZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-tibia" />;
}
