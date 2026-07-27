import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-online');
}

export default function RefugiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="refugia-online" />;
}
