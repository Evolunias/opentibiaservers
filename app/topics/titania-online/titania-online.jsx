import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-online');
}

export default function TitaniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="titania-online" />;
}
