import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online-tibia');
}

export default function BestZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online-tibia" />;
}
