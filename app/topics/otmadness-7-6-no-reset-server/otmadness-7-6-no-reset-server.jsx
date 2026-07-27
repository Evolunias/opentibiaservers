import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-6-no-reset-server');
}

export default function Otmadness76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-6-no-reset-server" />;
}
