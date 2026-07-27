import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-online');
}

export default function NewTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-online" />;
}
