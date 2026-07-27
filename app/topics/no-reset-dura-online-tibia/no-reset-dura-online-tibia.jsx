import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-tibia');
}

export default function NoResetDuraOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-tibia" />;
}
