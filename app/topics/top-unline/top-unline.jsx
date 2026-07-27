import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline');
}

export default function TopUnlineKeywordPage() {
  return <StaticKeywordPage slug="top-unline" />;
}
