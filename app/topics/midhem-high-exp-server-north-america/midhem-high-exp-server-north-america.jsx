import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-north-america');
}

export default function MidhemHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-north-america" />;
}
