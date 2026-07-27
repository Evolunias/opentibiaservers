import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-open-tibia');
}

export default function PopularDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-open-tibia" />;
}
