import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-online');
}

export default function TibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibianus-online" />;
}
