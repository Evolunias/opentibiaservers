import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-online');
}

export default function NewThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-online" />;
}
