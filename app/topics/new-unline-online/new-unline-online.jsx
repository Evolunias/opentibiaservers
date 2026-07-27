import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-online');
}

export default function NewUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-unline-online" />;
}
