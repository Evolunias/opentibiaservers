import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-online');
}

export default function NoResetMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-online" />;
}
