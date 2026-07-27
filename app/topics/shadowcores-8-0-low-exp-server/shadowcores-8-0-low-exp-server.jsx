import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-0-low-exp-server');
}

export default function Shadowcores80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-0-low-exp-server" />;
}
