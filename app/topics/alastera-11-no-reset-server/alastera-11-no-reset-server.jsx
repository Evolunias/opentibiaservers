import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-no-reset-server');
}

export default function Alastera11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-no-reset-server" />;
}
