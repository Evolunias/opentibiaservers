import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-ots');
}

export default function TopAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-ots" />;
}
