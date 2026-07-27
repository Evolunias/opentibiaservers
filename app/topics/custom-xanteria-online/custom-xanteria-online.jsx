import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-online');
}

export default function CustomXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-online" />;
}
