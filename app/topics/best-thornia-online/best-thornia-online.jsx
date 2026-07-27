import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-online');
}

export default function BestThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-online" />;
}
