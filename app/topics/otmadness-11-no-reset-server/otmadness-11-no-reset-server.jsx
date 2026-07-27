import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-no-reset-server');
}

export default function Otmadness11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-no-reset-server" />;
}
