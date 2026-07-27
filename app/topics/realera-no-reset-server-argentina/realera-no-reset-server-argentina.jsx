import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-no-reset-server-argentina');
}

export default function RealeraNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-no-reset-server-argentina" />;
}
