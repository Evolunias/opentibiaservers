import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-online');
}

export default function NoResetUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-online" />;
}
