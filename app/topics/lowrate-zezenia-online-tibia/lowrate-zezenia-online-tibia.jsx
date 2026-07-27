import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-tibia');
}

export default function LowrateZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-tibia" />;
}
