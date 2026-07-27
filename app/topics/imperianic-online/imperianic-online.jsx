import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-online');
}

export default function ImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="imperianic-online" />;
}
