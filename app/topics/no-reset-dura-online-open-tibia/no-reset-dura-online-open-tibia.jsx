import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-open-tibia');
}

export default function NoResetDuraOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-open-tibia" />;
}
