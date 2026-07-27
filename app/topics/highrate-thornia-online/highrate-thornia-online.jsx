import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-online');
}

export default function HighrateThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-online" />;
}
