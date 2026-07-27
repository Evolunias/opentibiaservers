import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-online');
}

export default function ClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="classicus-online" />;
}
