import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-tibia');
}

export default function NewZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-tibia" />;
}
