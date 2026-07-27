import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-online');
}

export default function HighrateClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-online" />;
}
