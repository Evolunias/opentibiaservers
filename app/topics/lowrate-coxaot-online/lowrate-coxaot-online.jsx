import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-online');
}

export default function LowrateCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-online" />;
}
