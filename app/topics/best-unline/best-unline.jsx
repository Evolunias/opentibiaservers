import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline');
}

export default function BestUnlineKeywordPage() {
  return <StaticKeywordPage slug="best-unline" />;
}
