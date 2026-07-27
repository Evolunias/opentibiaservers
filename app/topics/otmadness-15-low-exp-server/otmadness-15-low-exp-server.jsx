import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-low-exp-server');
}

export default function Otmadness15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-low-exp-server" />;
}
