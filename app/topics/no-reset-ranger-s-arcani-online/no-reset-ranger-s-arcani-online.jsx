import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-online');
}

export default function NoResetRangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-online" />;
}
