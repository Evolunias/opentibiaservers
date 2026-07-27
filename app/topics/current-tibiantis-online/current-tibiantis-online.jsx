import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-online');
}

export default function CurrentTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-online" />;
}
