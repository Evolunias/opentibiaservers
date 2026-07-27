import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-open-tibia');
}

export default function DuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-open-tibia" />;
}
