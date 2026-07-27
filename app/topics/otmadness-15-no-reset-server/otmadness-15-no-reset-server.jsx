import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-no-reset-server');
}

export default function Otmadness15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-no-reset-server" />;
}
