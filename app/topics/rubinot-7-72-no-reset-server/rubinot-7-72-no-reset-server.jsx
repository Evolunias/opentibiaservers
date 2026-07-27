import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-72-no-reset-server');
}

export default function Rubinot772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-72-no-reset-server" />;
}
