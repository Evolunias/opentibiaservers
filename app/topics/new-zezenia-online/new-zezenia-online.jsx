import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online');
}

export default function NewZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online" />;
}
