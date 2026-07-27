import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-online');
}

export default function BestClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-online" />;
}
