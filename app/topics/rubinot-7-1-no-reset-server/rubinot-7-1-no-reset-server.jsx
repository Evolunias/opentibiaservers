import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-1-no-reset-server');
}

export default function Rubinot71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-1-no-reset-server" />;
}
