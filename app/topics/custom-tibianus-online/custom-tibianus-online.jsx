import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-online');
}

export default function CustomTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-online" />;
}
