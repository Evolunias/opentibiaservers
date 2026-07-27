import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-open-tibia');
}

export default function OfficialZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-open-tibia" />;
}
