import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-online');
}

export default function OtlandOnlineKeywordPage() {
  return <StaticKeywordPage slug="otland-online" />;
}
