import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-online');
}

export default function NewMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-online" />;
}
