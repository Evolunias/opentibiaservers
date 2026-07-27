import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-online');
}

export default function CustomDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-online" />;
}
