import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-tibia');
}

export default function OfficialZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-tibia" />;
}
