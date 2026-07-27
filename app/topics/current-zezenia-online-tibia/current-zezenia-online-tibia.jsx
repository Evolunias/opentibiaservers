import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-tibia');
}

export default function CurrentZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-tibia" />;
}
