import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-online');
}

export default function NewZezeniaOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-online" />;
}
