import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-online');
}

export default function HighrateMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-online" />;
}
