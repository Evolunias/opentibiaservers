import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-1-low-exp-server');
}

export default function Shadowcores81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-1-low-exp-server" />;
}
