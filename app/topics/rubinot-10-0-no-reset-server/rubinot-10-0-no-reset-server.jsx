import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-no-reset-server');
}

export default function Rubinot100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-no-reset-server" />;
}
