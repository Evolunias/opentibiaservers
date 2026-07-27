import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-1-low-exp-server');
}

export default function Canob81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-1-low-exp-server" />;
}
