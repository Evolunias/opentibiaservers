import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-online');
}

export default function AureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-online" />;
}
