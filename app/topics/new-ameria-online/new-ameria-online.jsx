import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-online');
}

export default function NewAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-online" />;
}
