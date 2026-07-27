import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-low-exp-server');
}

export default function Otmadness13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-low-exp-server" />;
}
