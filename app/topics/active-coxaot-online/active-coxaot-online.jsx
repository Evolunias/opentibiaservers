import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-online');
}

export default function ActiveCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-online" />;
}
