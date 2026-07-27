import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-low-exp-server-poland');
}

export default function OxygenotLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-low-exp-server-poland" />;
}
