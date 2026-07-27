import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-online');
}

export default function NewKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-online" />;
}
