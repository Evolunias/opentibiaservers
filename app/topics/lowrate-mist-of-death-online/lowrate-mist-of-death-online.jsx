import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-online');
}

export default function LowrateMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-online" />;
}
