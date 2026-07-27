import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-online');
}

export default function ActiveTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-online" />;
}
