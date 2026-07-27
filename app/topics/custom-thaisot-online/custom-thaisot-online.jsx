import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-online');
}

export default function CustomThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-online" />;
}
