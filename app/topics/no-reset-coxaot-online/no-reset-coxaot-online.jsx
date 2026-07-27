import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-online');
}

export default function NoResetCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-online" />;
}
