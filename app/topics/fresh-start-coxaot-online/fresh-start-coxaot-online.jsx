import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-online');
}

export default function FreshStartCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-online" />;
}
