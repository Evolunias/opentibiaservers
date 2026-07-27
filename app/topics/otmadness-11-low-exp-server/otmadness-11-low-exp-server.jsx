import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-low-exp-server');
}

export default function Otmadness11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-low-exp-server" />;
}
