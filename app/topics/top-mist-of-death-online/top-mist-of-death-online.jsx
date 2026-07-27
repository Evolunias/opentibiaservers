import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-online');
}

export default function TopMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-online" />;
}
