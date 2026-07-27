import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global');
}

export default function ActiveAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global" />;
}
