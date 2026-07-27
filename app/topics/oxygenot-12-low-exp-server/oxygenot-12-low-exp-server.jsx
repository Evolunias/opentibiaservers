import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-low-exp-server');
}

export default function Oxygenot12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-low-exp-server" />;
}
