import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline');
}

export default function FreshStartUnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline" />;
}
