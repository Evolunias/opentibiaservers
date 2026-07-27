import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-low-exp-server');
}

export default function Shadowcores84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-low-exp-server" />;
}
