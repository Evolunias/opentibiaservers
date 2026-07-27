import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-online');
}

export default function BestCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-online" />;
}
