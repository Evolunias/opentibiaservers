import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline');
}

export default function CurrentUnlineKeywordPage() {
  return <StaticKeywordPage slug="current-unline" />;
}
