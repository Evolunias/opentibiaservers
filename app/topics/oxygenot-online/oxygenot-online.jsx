import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-online');
}

export default function OxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-online" />;
}
