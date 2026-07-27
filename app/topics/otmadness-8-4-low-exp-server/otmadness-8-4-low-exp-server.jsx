import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-4-low-exp-server');
}

export default function Otmadness84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-4-low-exp-server" />;
}
