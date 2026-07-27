import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline');
}

export default function LowrateUnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline" />;
}
