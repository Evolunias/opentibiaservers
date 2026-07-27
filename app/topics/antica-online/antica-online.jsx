import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-online');
}

export default function AnticaOnlineKeywordPage() {
  return <StaticKeywordPage slug="antica-online" />;
}
