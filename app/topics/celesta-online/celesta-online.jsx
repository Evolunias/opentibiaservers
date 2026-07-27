import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-online');
}

export default function CelestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="celesta-online" />;
}
