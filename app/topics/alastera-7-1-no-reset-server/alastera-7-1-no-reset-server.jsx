import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-1-no-reset-server');
}

export default function Alastera71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-1-no-reset-server" />;
}
