import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-online');
}

export default function NewXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-online" />;
}
