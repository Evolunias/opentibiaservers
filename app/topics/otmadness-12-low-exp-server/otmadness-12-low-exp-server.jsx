import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-low-exp-server');
}

export default function Otmadness12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-low-exp-server" />;
}
