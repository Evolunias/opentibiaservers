import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-high-exp-server-north-america');
}

export default function UnlineHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-high-exp-server-north-america" />;
}
