import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-no-reset-server-poland');
}

export default function UnlineNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-no-reset-server-poland" />;
}
