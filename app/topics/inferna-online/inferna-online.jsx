import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-online');
}

export default function InfernaOnlineKeywordPage() {
  return <StaticKeywordPage slug="inferna-online" />;
}
