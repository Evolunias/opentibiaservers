import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline');
}

export default function NewUnlineKeywordPage() {
  return <StaticKeywordPage slug="new-unline" />;
}
