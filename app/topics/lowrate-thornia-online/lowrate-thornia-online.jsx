import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-online');
}

export default function LowrateThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-online" />;
}
