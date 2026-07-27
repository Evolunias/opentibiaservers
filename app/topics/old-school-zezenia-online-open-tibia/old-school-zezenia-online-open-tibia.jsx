import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online-open-tibia');
}

export default function OldSchoolZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online-open-tibia" />;
}
