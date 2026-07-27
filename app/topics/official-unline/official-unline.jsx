import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline');
}

export default function OfficialUnlineKeywordPage() {
  return <StaticKeywordPage slug="official-unline" />;
}
