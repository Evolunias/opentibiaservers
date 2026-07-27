import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-online');
}

export default function CustomTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-online" />;
}
