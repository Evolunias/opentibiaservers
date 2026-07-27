import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-72-no-reset-server');
}

export default function Otmadness772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-72-no-reset-server" />;
}
