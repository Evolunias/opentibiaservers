import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-online');
}

export default function CurrentClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-online" />;
}
