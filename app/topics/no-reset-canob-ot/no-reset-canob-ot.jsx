import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-ot');
}

export default function NoResetCanobOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-ot" />;
}
