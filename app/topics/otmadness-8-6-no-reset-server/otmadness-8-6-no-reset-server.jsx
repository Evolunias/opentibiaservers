import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-6-no-reset-server');
}

export default function Otmadness86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-6-no-reset-server" />;
}
