import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-low-exp-server');
}

export default function Oxygenot100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-low-exp-server" />;
}
