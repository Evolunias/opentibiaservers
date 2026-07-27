import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline');
}

export default function PopularUnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-unline" />;
}
