import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-open-tibia');
}

export default function TopDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-open-tibia" />;
}
