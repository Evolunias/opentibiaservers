import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-online');
}

export default function NewEternalOdysseyOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-online" />;
}
