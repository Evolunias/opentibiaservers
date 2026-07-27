import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline');
}

export default function NoResetUnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline" />;
}
