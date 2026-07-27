import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-open-tibia');
}

export default function OfficialDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-open-tibia" />;
}
