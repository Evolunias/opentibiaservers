import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-low-exp-server-north-america');
}

export default function OxygenotLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-low-exp-server-north-america" />;
}
