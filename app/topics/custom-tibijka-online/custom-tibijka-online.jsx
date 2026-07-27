import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-online');
}

export default function CustomTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-online" />;
}
