import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-1-high-exp-server');
}

export default function Oxygenot71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-1-high-exp-server" />;
}
