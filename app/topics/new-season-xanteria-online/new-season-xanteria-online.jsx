import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-online');
}

export default function NewSeasonXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-online" />;
}
