import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-low-exp-server');
}

export default function Otmadness14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-low-exp-server" />;
}
