import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-official');
}

export default function NoResetDuraOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-official" />;
}
