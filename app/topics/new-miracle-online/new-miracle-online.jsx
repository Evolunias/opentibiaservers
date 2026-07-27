import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-online');
}

export default function NewMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-online" />;
}
