import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-online');
}

export default function CustomCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-online" />;
}
