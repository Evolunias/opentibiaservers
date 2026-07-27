import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-online');
}

export default function LowrateMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-online" />;
}
