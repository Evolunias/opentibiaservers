import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-online');
}

export default function CustomAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-online" />;
}
