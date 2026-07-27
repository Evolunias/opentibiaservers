import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-online');
}

export default function ActiveThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-online" />;
}
