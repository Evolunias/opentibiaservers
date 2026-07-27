import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-no-reset-server-poland');
}

export default function MiracleNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="miracle-no-reset-server-poland" />;
}
