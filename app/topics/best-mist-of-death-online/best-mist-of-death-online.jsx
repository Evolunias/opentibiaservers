import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-online');
}

export default function BestMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-online" />;
}
