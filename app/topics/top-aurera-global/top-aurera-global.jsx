import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global');
}

export default function TopAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global" />;
}
