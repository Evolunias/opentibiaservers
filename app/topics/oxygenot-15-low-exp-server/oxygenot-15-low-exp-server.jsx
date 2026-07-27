import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-low-exp-server');
}

export default function Oxygenot15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-low-exp-server" />;
}
