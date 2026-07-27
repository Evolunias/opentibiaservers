import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-online');
}

export default function TopCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-online" />;
}
