import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-no-reset-server');
}

export default function Otmadness13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-no-reset-server" />;
}
