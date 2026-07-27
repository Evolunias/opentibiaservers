import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-online');
}

export default function TibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-online" />;
}
