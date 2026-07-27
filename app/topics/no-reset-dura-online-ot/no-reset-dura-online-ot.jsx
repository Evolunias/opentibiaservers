import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-ot');
}

export default function NoResetDuraOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-ot" />;
}
