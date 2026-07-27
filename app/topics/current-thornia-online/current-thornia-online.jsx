import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-online');
}

export default function CurrentThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-online" />;
}
