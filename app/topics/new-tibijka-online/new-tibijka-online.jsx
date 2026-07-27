import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-online');
}

export default function NewTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-online" />;
}
