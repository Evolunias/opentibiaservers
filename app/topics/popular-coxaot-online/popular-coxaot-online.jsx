import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-online');
}

export default function PopularCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-online" />;
}
