import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-no-reset-server');
}

export default function Alastera14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-no-reset-server" />;
}
