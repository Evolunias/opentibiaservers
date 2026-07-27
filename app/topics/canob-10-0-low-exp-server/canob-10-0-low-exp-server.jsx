import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-low-exp-server');
}

export default function Canob100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-low-exp-server" />;
}
