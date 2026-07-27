import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-online');
}

export default function CustomThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-online" />;
}
