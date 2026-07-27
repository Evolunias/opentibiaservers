import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline');
}

export default function UnlineKeywordPage() {
  return <StaticKeywordPage slug="unline" />;
}
