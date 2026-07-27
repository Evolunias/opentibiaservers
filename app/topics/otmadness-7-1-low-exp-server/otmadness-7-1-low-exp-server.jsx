import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-1-low-exp-server');
}

export default function Otmadness71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-1-low-exp-server" />;
}
