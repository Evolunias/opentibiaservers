import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-low-exp-server-argentina');
}

export default function OxygenotLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-low-exp-server-argentina" />;
}
