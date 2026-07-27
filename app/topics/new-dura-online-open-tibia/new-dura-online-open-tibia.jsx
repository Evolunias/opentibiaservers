import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-open-tibia');
}

export default function NewDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-open-tibia" />;
}
