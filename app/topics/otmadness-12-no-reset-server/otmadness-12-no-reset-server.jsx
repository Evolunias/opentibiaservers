import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-no-reset-server');
}

export default function Otmadness12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-no-reset-server" />;
}
