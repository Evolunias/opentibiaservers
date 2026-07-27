import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-low-exp-server');
}

export default function Shadowcores71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-low-exp-server" />;
}
