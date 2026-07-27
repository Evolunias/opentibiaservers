import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-tibia');
}

export default function TopZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-tibia" />;
}
