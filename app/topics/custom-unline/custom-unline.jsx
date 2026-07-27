import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline');
}

export default function CustomUnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-unline" />;
}
