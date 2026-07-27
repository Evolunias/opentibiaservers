import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-open-tibia');
}

export default function ActiveDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-open-tibia" />;
}
