import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-online');
}

export default function NewDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-online" />;
}
