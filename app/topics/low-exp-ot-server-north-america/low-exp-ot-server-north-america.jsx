import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-north-america');
}

export default function LowExpOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-north-america" />;
}
