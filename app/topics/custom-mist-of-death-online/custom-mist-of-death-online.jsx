import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-online');
}

export default function CustomMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-online" />;
}
