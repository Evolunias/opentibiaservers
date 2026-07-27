import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-4-low-exp-server');
}

export default function Otmadness74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-4-low-exp-server" />;
}
