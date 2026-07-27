import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-no-reset-server');
}

export default function Alastera13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-no-reset-server" />;
}
