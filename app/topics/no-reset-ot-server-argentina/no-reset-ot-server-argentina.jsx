import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ot-server-argentina');
}

export default function NoResetOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ot-server-argentina" />;
}
