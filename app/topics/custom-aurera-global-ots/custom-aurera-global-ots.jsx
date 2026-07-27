import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-ots');
}

export default function CustomAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-ots" />;
}
