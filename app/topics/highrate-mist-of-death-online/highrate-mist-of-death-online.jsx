import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death-online');
}

export default function HighrateMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death-online" />;
}
