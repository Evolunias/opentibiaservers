import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-no-reset-server-poland');
}

export default function RealeraNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-no-reset-server-poland" />;
}
