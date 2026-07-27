import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline');
}

export default function ActiveUnlineKeywordPage() {
  return <StaticKeywordPage slug="active-unline" />;
}
