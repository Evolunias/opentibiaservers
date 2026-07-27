import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline');
}

export default function HighrateUnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline" />;
}
