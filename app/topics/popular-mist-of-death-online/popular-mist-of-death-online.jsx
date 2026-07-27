import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-online');
}

export default function PopularMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-online" />;
}
