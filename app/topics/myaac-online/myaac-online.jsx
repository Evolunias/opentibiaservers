import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-online');
}

export default function MyaacOnlineKeywordPage() {
  return <StaticKeywordPage slug="myaac-online" />;
}
