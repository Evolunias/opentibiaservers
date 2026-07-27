import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-online');
}

export default function MadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-online" />;
}
