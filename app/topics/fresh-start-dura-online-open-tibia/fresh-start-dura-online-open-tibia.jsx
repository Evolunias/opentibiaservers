import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-open-tibia');
}

export default function FreshStartDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-open-tibia" />;
}
