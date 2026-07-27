import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-online');
}

export default function PaceraOnlineKeywordPage() {
  return <StaticKeywordPage slug="pacera-online" />;
}
