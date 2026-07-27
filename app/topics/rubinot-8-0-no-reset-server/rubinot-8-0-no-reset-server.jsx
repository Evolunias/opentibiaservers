import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-0-no-reset-server');
}

export default function Rubinot80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-0-no-reset-server" />;
}
