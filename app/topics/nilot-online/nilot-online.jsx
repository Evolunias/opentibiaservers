import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-online');
}

export default function NilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="nilot-online" />;
}
