import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-online');
}

export default function ActiveMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-online" />;
}
