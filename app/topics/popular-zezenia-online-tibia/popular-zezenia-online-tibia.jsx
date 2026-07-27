import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-tibia');
}

export default function PopularZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-tibia" />;
}
