import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-online');
}

export default function QuinteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="quintera-online" />;
}
