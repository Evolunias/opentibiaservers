import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-high-exp-server-uk');
}

export default function OxygenotHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-high-exp-server-uk" />;
}
