import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-online');
}

export default function NewImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-online" />;
}
