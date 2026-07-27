import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-poland');
}

export default function NoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-poland" />;
}
