import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-argentina');
}

export default function NoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-argentina" />;
}
