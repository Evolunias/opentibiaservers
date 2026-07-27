import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-online');
}

export default function DoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="dolera-online" />;
}
