import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-no-reset-server');
}

export default function Alastera15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-no-reset-server" />;
}
