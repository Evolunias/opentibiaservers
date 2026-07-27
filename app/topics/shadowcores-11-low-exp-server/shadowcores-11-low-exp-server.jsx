import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-low-exp-server');
}

export default function Shadowcores11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-low-exp-server" />;
}
