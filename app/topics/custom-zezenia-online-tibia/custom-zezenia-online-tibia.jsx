import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-tibia');
}

export default function CustomZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-tibia" />;
}
