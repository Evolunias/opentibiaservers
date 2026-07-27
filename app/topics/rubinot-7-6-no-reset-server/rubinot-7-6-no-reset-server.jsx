import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-no-reset-server');
}

export default function Rubinot76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-no-reset-server" />;
}
