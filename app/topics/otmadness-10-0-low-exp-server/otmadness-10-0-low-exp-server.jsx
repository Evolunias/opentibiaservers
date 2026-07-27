import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-low-exp-server');
}

export default function Otmadness100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-low-exp-server" />;
}
