import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-no-reset-server');
}

export default function Alastera96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-no-reset-server" />;
}
