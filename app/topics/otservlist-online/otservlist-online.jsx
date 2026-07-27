import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-online');
}

export default function OtservlistOnlineKeywordPage() {
  return <StaticKeywordPage slug="otservlist-online" />;
}
