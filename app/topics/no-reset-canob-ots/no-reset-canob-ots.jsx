import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-ots');
}

export default function NoResetCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-ots" />;
}
