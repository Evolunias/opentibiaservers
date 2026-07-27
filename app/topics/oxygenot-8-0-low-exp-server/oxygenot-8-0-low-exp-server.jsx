import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-0-low-exp-server');
}

export default function Oxygenot80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-0-low-exp-server" />;
}
