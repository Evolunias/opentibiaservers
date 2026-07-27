import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-online');
}

export default function BestXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-online" />;
}
