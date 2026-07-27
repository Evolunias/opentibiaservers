import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-low-exp-server-germany');
}

export default function OxygenotLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-low-exp-server-germany" />;
}
