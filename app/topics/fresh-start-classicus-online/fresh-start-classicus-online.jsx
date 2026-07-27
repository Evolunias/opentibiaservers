import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-online');
}

export default function FreshStartClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-online" />;
}
