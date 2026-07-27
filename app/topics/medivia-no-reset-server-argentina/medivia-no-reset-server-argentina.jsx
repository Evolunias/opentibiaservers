import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-no-reset-server-argentina');
}

export default function MediviaNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-no-reset-server-argentina" />;
}
