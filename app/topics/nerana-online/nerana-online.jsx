import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-online');
}

export default function NeranaOnlineKeywordPage() {
  return <StaticKeywordPage slug="nerana-online" />;
}
