import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-no-reset-server');
}

export default function Alastera74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-no-reset-server" />;
}
