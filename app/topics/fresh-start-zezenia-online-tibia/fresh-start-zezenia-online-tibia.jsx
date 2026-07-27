import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-tibia');
}

export default function FreshStartZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-tibia" />;
}
