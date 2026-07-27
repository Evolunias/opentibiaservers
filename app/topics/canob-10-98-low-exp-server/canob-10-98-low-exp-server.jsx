import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-98-low-exp-server');
}

export default function Canob1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-98-low-exp-server" />;
}
