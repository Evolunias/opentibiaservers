import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-9-6-low-exp-server');
}

export default function Otmadness96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-9-6-low-exp-server" />;
}
