import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-online');
}

export default function CurrentCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-online" />;
}
