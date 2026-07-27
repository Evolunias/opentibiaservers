import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria-online');
}

export default function OfficialXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria-online" />;
}
