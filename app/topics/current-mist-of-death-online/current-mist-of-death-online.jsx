import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-mist-of-death-online');
}

export default function CurrentMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-mist-of-death-online" />;
}
