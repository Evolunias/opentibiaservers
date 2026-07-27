import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-low-exp-server');
}

export default function Shadowcores13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-low-exp-server" />;
}
