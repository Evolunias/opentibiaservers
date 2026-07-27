import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-no-reset-server-usa');
}

export default function RealeraNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-no-reset-server-usa" />;
}
