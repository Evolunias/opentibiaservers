import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-ots');
}

export default function AureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-ots" />;
}
