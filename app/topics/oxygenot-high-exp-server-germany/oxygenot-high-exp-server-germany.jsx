import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-high-exp-server-germany');
}

export default function OxygenotHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-high-exp-server-germany" />;
}
