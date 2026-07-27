import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-4-no-reset-server');
}

export default function Alastera84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-4-no-reset-server" />;
}
