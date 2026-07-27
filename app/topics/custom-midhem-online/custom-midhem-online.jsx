import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-online');
}

export default function CustomMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-online" />;
}
