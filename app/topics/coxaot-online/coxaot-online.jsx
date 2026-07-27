import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-online');
}

export default function CoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="coxaot-online" />;
}
