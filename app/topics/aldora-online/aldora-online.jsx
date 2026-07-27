import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-online');
}

export default function AldoraOnlineKeywordPage() {
  return <StaticKeywordPage slug="aldora-online" />;
}
