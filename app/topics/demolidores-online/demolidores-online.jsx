import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-online');
}

export default function DemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="demolidores-online" />;
}
