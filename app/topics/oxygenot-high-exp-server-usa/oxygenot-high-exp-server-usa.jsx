import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-high-exp-server-usa');
}

export default function OxygenotHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-high-exp-server-usa" />;
}
