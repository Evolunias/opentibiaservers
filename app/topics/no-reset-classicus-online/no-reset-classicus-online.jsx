import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-online');
}

export default function NoResetClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-online" />;
}
