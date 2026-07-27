import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-12-low-exp-server');
}

export default function Shadowcores12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-12-low-exp-server" />;
}
