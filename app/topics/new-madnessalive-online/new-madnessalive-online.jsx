import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-online');
}

export default function NewMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-online" />;
}
