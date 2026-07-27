import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-online');
}

export default function MorganaOnlineKeywordPage() {
  return <StaticKeywordPage slug="morgana-online" />;
}
