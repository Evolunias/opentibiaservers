import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-4-low-exp-server');
}

export default function Oxygenot74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-4-low-exp-server" />;
}
