import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-online');
}

export default function ActiveClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-online" />;
}
