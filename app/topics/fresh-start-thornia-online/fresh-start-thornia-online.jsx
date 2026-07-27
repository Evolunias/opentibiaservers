import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-online');
}

export default function FreshStartThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-online" />;
}
