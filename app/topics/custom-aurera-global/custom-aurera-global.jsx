import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global');
}

export default function CustomAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global" />;
}
