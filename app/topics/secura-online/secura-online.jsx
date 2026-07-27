import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-online');
}

export default function SecuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="secura-online" />;
}
