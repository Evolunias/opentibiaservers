import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-no-reset-server-poland');
}

export default function RealestaNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-no-reset-server-poland" />;
}
