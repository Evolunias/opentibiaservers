import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-online');
}

export default function NewRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-online" />;
}
