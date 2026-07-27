import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-online');
}

export default function MidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="midhem-online" />;
}
