import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-low-exp-server-usa');
}

export default function OxygenotLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-low-exp-server-usa" />;
}
