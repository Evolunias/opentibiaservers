import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-ots');
}

export default function ActiveAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-ots" />;
}
