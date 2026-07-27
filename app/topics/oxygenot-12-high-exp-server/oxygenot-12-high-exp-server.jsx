import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-high-exp-server');
}

export default function Oxygenot12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-high-exp-server" />;
}
