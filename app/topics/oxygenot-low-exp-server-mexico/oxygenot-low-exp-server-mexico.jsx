import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-low-exp-server-mexico');
}

export default function OxygenotLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-low-exp-server-mexico" />;
}
