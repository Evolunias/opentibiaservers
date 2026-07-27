import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-north-america');
}

export default function LowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-north-america" />;
}
