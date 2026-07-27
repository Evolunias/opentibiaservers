import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-open-tibia');
}

export default function BestDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-open-tibia" />;
}
