import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-9-6-no-reset-server');
}

export default function Otmadness96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-9-6-no-reset-server" />;
}
