import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-no-reset-server');
}

export default function Rubinot11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-no-reset-server" />;
}
